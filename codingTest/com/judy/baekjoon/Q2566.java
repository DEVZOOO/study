package com.judy.baekjoon;

import java.util.Scanner;

/**
 * Q2566 최댓값
 * Bronze 3
 */
public class Q2566 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 최댓값, 행 인덱스, 열 인덱스
        int max = -1, maxRow = 0, maxCol = 0;

        for (int i = 0; i < 9; i += 1) {
            for (int j = 0; j < 9; j += 1) {
                int num = scanner.nextInt();
                // 기존의 최댓값보다 크면 업데이트
                if (num > max) {
                    max = num;
                    maxRow = i;
                    maxCol = j;
                }

            }
        }

        System.out.println(max);
        System.out.println((maxRow + 1) + " " + (maxCol + 1));  // 인덱스이므로 1씩 더해서 출력

    }
}
