package com.judy.baekjoon;

import java.util.Scanner;

public class b1000 {
    public static void main(String[] args) {
        /*
        TEST CASE
        1.
            3
            0 0 13 40 0 37
            0 0 3 0 7 4
            1 1 1 1 1 5
            ---------------
            2
            1
            0
        2.
            7
            0 0 1 0 0 1
            0 0 1 0 0 3
            1 0 1 2 0 2
            -1 0 1 2 0 2
            1 0 2 3 0 3
            2 0 1 3 0 3
            -2 0 1 3 0 3
            ---------------
            -1
            0
            1
            1
            2
            0
            0

         */

        Scanner scan = new Scanner(System.in);
        
        int t = scan.nextInt();

        StringBuffer sf = new StringBuffer();

        for (int i = 0; i < t; i += 1) {
            int x1 = scan.nextInt();
            int y1 = scan.nextInt();
            int r1 = scan.nextInt();

            int x2 = scan.nextInt();
            int y2 = scan.nextInt();
            int r2 = scan.nextInt();

            if (i != 0) {
                sf.append("\n");
            }

            sf.append(calcPoint(x1, y1, r1, x2, y2, r2));

        }

        System.out.println(sf);

    }   // END main

    /**
     * 좌표 계산
     */
    public static int calcPoint(int x1, int y1, int r1, int x2, int y2, int r2) {

        double distance = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);

        int result = 2;

        /*
        Another Answer

        double distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        int sum = r1 + r2;
        int sub = Math.abs(r1 - r2);

        if (distance == 0 && r1 == r2) {
            // 두 원이 정확히 겹침
            result = -1;
        } else if (distance < sub) {
            // 두 원이 서로 겹치면서 인접하지 않음
            result = 0;
        } else if (distance > sum) {
            // 두 원이 서로 안겹침, 인접하지 않음
            result = 0;
        } else if (distance == sub) {
            // 두 원이 서로 겹침, 인접
            result = 1;
        } else if (distance == sum) {
            // 두 원이 서로 안겹침, 인접
            result = 1;
        } else {
            // 두 원이 서로 겹침, 인접하지 않는음
            result = 2;
        }
         */

        if (r1 == r2 && x1 == x2 && y1 == y2) {
            // 일치
            result = -1;
        }
        if (distance == Math.pow(r1 + r2, 2) && distance != 0) {
            // 외접
            result = 1;
        } else if (distance == Math.pow(r1 - r2, 2) && distance != 0) {
            // 내접
            result = 1;
        } else if (distance < Math.pow(r1 - r2, 2) && distance != 0) {
            // 포함 접하지 않음
            result = 0;
        } else if (distance > Math.pow(r1 + r2, 2) && distance != 0) {
            // 접하지 않음
            result = 0;
        } else if (Math.abs(r1 - r2) != 0 && distance == 0) {
            result = 0;
        }

        return result;
    }
}
