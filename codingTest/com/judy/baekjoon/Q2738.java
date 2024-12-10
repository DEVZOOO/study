package com.judy.baekjoon;

import java.util.*;

/**
 * Q2738 행렬 덧셈
 * Bronze 3
 */
public class Q2738 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n, m;

        n = scanner.nextInt();
        m = scanner.nextInt();

        int[][] result = new int[n][m];

        // 두 행렬이므로 2번 반복
        for (int k = 0; k < 2; k += 1) {
            for (int i = 0; i < n; i += 1) {
                for (int j = 0; j < m; j += 1) {
                    // 입력받아서 바로 더하기
                    result[i][j] += scanner.nextInt();
                }
            }
        }

        for (int i = 0; i < n; i += 1) {
            for (int j = 0; j < m; j += 1) {
                System.out.print((j > 0 ? " " : "") + result[i][j]);
            }

            System.out.println();
        }

    }
}
