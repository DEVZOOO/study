package com.judy.baekjoon;

import java.util.*;

/**
 * Q1193 분수찾기
 * Silver 5
 */
public class Q1193 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int x = Integer.parseInt(scanner.nextLine());

        // 범위 구하기
        int idx = 1, s = 1, e = 1;

        while (true) {
            if (x >= Math.min(s, e) && x <= Math.max(s, e)) {
                break;
            }

            idx += 1;

            if (idx % 2 == 0) {
                // 인덱스 짝수
                s += 1;
                e += 4 * (idx / 2) - 2;
            } else {
                // 인덱스 홀수
                s += 4 * (idx / 2);
                e += 1;
            }
        }   // END loop

        int diff = Math.abs(x - s), c = idx - 1 - diff;

        // 인덱스이므로 1씩 더하기
        System.out.printf("%d/%d\n", diff + 1, c + 1);

    }
}
