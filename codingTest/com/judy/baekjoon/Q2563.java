package com.judy.baekjoon;

import java.util.*;

/**
 * Q2563 색종이 ⚠️
 * Silver 5
 */
public class Q2563 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 검정 색종이 크기
        final int BLACK_WIDTH = 10, BLACK_HEIGHT = 10;
        // 흰 도화지에 색종이가 붙은 위치(0, 1)
        int[][] white = new int[100][100];

        // 색종이 개수
        int n = Integer.parseInt(scanner.nextLine());

        // 시작좌표 입력
        for (int i = 0; i < n; i += 1) {
            String str = scanner.nextLine();
            String[] arr = str.split(" ");

            int x = Integer.parseInt(arr[0]);
            int y = Integer.parseInt(arr[1]);

            // 색종이 붙은 면적 1 처리
            for (int j = x; j < x + BLACK_WIDTH; j += 1) {
                for (int k = y; k < y + BLACK_HEIGHT; k += 1) {
                    white[j][k] = 1;
                }
            }
        }

        // 넓이의 합
        int square = 0;
        for (int i = 0; i < 100; i += 1) {
            for (int j = 0; j < 100; j += 1) {
                square += white[i][j];
            }
        }

        /*
        // 무언가 수학적으로...

        // 색종이 좌표 배열
        int[][] coor = new int[n][2];

        // 총 면적
        int square = BLACK_WIDTH * BLACK_HEIGHT * n;

        for (int i = 0; i < n; i += 1) {
            String str = scanner.nextLine();
            String[] arr = str.split(" ");
            int x = Integer.parseInt(arr[0]);
            int y = Integer.parseInt(arr[1]);

            coor[i][0] = x;
            coor[i][1] = y;
        }

        // 겹치는 영역 있는지
        for (int i = 0; i < n - 1; i += 1) {
            int x = coor[i][0];
            int y = coor[i][1];

            for (int j = i + 1; j < n; j += 1) {
                int x2 = coor[j][0];
                int y2 = coor[j][1];

                // 좌표의 차가 너비/높이보다 작으면 겹침
                int biggerX = Math.max(x, x2);
                int smallerX = Math.min(x, x2);
                int biggerY = Math.max(y, y2);
                int smallerY = Math.min(y, y2);

                boolean dupX = biggerX > smallerX && biggerX < smallerX + BLACK_WIDTH;
                boolean dupY = biggerY > smallerY && biggerY < smallerY + BLACK_HEIGHT;
                if (dupX && dupY) {
                    int diffW = BLACK_WIDTH - (biggerX - smallerX);
                    int diffY = BLACK_HEIGHT - (biggerY - smallerY);
                    square -= diffW * diffY;
                }
            }
        }
         */

        System.out.println(square);
    }
}
