package com.judy.baekjoon;

import java.util.*;

/**
 * Q2581 소수
 * Bronze 2
 */
public class Q2581 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int m = Integer.parseInt(scanner.nextLine());
        int n = Integer.parseInt(scanner.nextLine());

        int min = -1, sum = 0;

        // 둘다 1일 경우 -1 출력하고 나가기
        if (m == 1 && n == 1) {
            System.out.println("-1");
            return;
        }

        boolean isPrime;

        // 시작값이 1이면 2부터
        for (int i = m == 1 ? 2 : m; i <= n; i += 1) {
            // flag 초기화
            isPrime = true;

            for (int j = 2; j < i; j += 1) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }

            // 소수일 때만
            if (isPrime) {
                sum += i;
                min = min < 0 ? i : Math.min(i, min);
            }
        }   // END loop

        if (sum == 0) {
            System.out.println("-1");
        } else {
            System.out.printf("%d\n%d", sum, min);
        }

    }
}
