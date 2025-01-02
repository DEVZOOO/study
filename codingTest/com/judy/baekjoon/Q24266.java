package com.judy.baekjoon;

import java.util.*;

/**
 * Q24266 알고리즘 수업 - 알고리즘의 수행 시간 5
 * Bronze 3
 */
public class Q24266 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        long result = (long) n * n * n;
        System.out.println(result + "\n3");
    }
}
