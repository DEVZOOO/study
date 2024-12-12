package com.judy.baekjoon;

import java.util.*;

/**
 * Q2903 중앙 이동 알고리즘
 * Bronze 3
 */
public class Q2903 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());
        /*
        // 방법1
        int dot = 2;    // 초기값

        // an = a(n-1) + 2^(n-1)
        for (int i = 1; i <= n; i += 1) {
            dot += Math.pow(2, i - 1);
        }

        System.out.println(dot * dot);
         */

        // 방법2
        // 1 + 2^n
        int result = (int) (Math.pow(2, n) + 1);

        System.out.println(result * result);
    }
}
