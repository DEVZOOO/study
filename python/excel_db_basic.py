# DB
import cx_Oracle
import os
import pymysql.cursors

# Excel
from openpyxl import Workbook
from openpyxl.worksheet.worksheet import Worksheet
from openpyxl.styles import Font, PatternFill, Alignment, NamedStyle, Border, Side

import traceback
from typing import List, Dict, Optional, Literal
from dataclasses import dataclass
from datetime import datetime


class Constant:
    # oracle client 경로
    LOCATION = r"C:\\...\\instantclient_23_6"


class DbConfig:
    """
    DB 연결정보
    """

    HOST = "192.168.xxx.xxx"
    PORT = 1234
    USER = "user"
    PASSWORD = "password"
    DATABASE = "db"
    CHARSET = "utf8mb4"  # MySQL


# ======== oracle client 경로 설정 ========
os.environ["PATH"] = Constant.LOCATION + ";" + os.environ["PATH"]


def main():
    """
    진입함수
    """

    schema = input("스키마 입력 > ")
    file_name = input("저장할 파일명 > ")

    format = "%Y-%m-%d %H:%M:%S"

    print(f"----------- [{datetime.now().strftime(format)}] START TO SAVE EXCEL FILE")

    try:
        conn = None

        # 1. DB 연결
        # conn = cx_Oracle.connect(
        #     DbConfig.USER,
        #     DbConfig.PASSWORD,
        #     f"{DbConfig.HOST}:{DbConfig.PORT}/{DbConfig.DATABASE}",
        # )
        conn = pymysql.connect(
            host=DbConfig.HOST,
            port=DbConfig.PORT,
            user=DbConfig.USER,
            password=DbConfig.PASSWORD,
            database=DbConfig.DATABASE,
            charset=DbConfig.CHARSET,
            cursorclass=pymysql.cursors.DictCursor,
        )

        with conn.cursor() as cursor:
            # 2. 실행
            # exec_oracle(cursor=cursor, schema=schema, file_name=file_name)
            exec_mysql(cursor=cursor, schema=schema, file_name=file_name)

    except Exception as e:
        print(f"## FAIL TO SAVE FILE :: {e}")
        traceback.print_exc()
    else:
        print(f"💚 SUCCESS TO SAVE FILE!")

    print(f"----------- [{datetime.now().strftime(format)}] FINISH TO SAVE EXCEL FILE")


def exec_oracle(
        cursor,
        schema: str,
        file_name: str,
):
    """
    Oracle 실행
    """

    # 엑셀 생성
    wb = Workbook()
    sheet = wb.active

    # 테이블 리스트 조회
    sql = f"""
        SELECT * 
        FROM ALL_TABLES AT
        LEFT JOIN ALL_TAB_COMMENTS ATC
        ON AT.TABLE_NAME = ATC.TABLE_NAME
        AND AT.OWNER = '{schema}'
        """

    cursor.execute(sql)
    tables = cursor.fetchall()

    for t in tables:
        t = t[0]

        # 테이블 정보 조회
        sql = f"""
            SELECT
                AT.TABLE_NAME
                , AT.TABLESPACE_NAME
                , AT.OWNER
                , ATC.COMMENTS
            FROM ALL_TABLES AT
            LEFT JOIN ALL_TAB_COMMENTS ATC
            ON AT.TABLE_NAME = ATC.TABLE_NAME
            WHERE AT.TABLE_NAEM = '{t}'
            AND AT.OWNER = '{schema}'
            """
        cursor.execute(sql)
        table_info = cursor.fetchone()

        # 컬럼정보 조회
        sql = f"""
            SELECT *
            FROM ALL_TAB_COLUMNS
            WHERE TABLE_NAME = '{t}'
            """
        cursor.execute(sql)
        column_list = cursor.fetchall()

        write_excel(sheet=sheet, table_info=table_info, column_list=column_list)

    wb.save(f"{file_name}.xlsx")


def exec_mysql(
        cursor: pymysql.cursors.DictCursor,
        schema: str,
        file_name: str,
):
    """
    MySQL 실행
    """

    # 엑셀 생성
    wb = Workbook()
    sheet = wb.active

    # 테이블 리스트 조회
    sql = f"""
        SELECT TABLE_NAME
        FROM INFORMATION_SCHEMA.TABLES
        WHERE TABLE_SCHEMA = '{schema}'
        """

    cursor.execute(sql)
    tables = cursor.fetchall()

    for t in tables:
        t = t["TABLE_NAME"]

        # 테이블 정보 조회
        sql = f"""
            SELECT 
                TABLE_NAME
                , TABLE_SCHEMA
                , TABLE_COMMENT
            FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_NAME = '{t}'
            """
        cursor.execute(sql)
        table_info = cursor.fetchone()

        # 컬럼정보 조회
        sql = f"""
            SHOW FULL COLUMNS FROM {t.upper()}
            """
        cursor.execute(sql)
        column_list = cursor.fetchall()

        write_excel(sheet=sheet, table_info=table_info, column_list=column_list)

    wb.save(f"{file_name}.xlsx")


# ============= Excel 관련 START =============
def write_excel(sheet: Worksheet, table_info, column_list: List):
    """
    엑셀에 데이터 입력
    """

    # 제목
    sheet.append(["테이블정의서"])

    # 테이블정보
    sheet.append(
        [
            "테이블명",
            table_info["TABLE_NAME"],
            "테이블스키마",
            table_info["TABLE_SCHEMA"],
        ]
    )

    # 컬럼 정보
    sheet.append(["번호", "컬럼명", "설명", "타입", "길이", "NULL", "KEY", "기본값"])

    # 컬럼 정보는 배열이므로 루프에서 실행합니다.
    i = 0
    for c in column_list:
        i += 1
        # 각 DBMS 조회값에 맞는 key로 접근하세요
        sheet.append(
            [
                i,
                # Oracle
                # c["COLUMN_NAME"],
                # c["COL_COMMENTS"],
                # c["DATA_TYPE"],
                # c["DATA_LENGTH"],
                # c["NULLABLE"],
                # c["KEY_TYPE"],
                # c["DATA_DEFAULT"],
                # MySQL
                c["Field"],
                c["Comment"],
                c["Type"],
                "",
                c["Null"],
                c["Key"],
                c["Default"],
            ]
        )


main()
