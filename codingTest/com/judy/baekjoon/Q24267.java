package com.judy.baekjoon;

import java.util.Scanner;

/**
 * Q24267 알고리즘 수업 - 알고리즘의 수행 시간 6
 * Bronze 2
 */
public class Q24267 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        long n = scanner.nextLong();

        long sum = 0;
        for (int i = 3; i <= n; i += 1) {
            sum += (i - n - 1) * (i - n - 2) / 2;
        }

        System.out.println(sum + "\n3");
    }
}
