package com.judy.baekjoon;

import java.util.*;

/**
 * Q1085 직사각형에서 탈출
 * Bronze 3
 */
public class Q1085 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int x = scanner.nextInt();
        int y = scanner.nextInt();
        int w = scanner.nextInt();
        int h = scanner.nextInt();

        int horizon = Math.min(x, w - x);
        int vertical = Math.min(y, h - y);

        System.out.println(Math.min(horizon, vertical));

    }
}
