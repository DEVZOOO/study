package com.judy.baekjoon;

import java.util.*;

/**
 * Q24265 알고리즘 수업 - 알고리즘의 수행 시간 4
 * Bronze 3
 */
public class Q24265 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        long result = (long) ((Math.pow(n, 2) - n) / 2);

        System.out.println(result + "\n2");
    }
}
