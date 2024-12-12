package com.judy.baekjoon;

import java.util.*;

/**
 * Q2720 세탁소 사장 동혁
 * Bronze 3
 */
public class Q2720 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        final int[] AMT = {25 ,10, 5, 1};

        // 테스트케이스 개수
        int t = Integer.parseInt(scanner.nextLine());

        int[][] r = new int[t][4];

        for (int i = 0; i < t; i += 1) {
            // 거스름돈(센트)
            int c = Integer.parseInt(scanner.nextLine());

            for (int j = 0; j < AMT.length; j += 1) {
                int a = AMT[j];
                int q = c / a;
                c %= a;

                r[i][j] = q;
            }
        }

        for (int[] arr : r) {
            for (int i = 0; i < arr.length; i += 1) {
                if (i > 0) {
                    System.out.print(" ");
                }

                System.out.print(arr[i]);
            }

            System.out.println();
        }

    }
}
