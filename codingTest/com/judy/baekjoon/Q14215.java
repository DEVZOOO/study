package com.judy.baekjoon;

import java.util.*;

/**
 * Q14215 세 막대
 * Bronze 3
 */
public class Q14215 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();

        int around = 0;

        for (int i = 1; i <= a; i += 1) {
            for (int j = 1; j <= b; j += 1) {
                for (int k = 1; k <= c; k += 1) {
                    int maxVal = Math.max(i, Math.max(j, k));
                    if (i + j + k - maxVal <= maxVal) {
                        continue;
                    }

                    if (i + j + k > around) {
                        around = i + j + k;
                    }
                }
            }
        }

        System.out.println(around);
    }
}
