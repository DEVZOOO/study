package com.judy.baekjoon;

import java.util.*;

/**
 * Q2292 벌집
 * Bronze 2
 */
public class Q2292 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int sum = 1, i = 0;

        while (sum < n) {
            i += 1;
            sum += 6 * i;
        }

        System.out.println(i + 1);
    }
}
