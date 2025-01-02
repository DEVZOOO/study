package com.judy.baekjoon;

import java.util.*;

/**
 * Q24313 알고리즘 수업 - 점근적 표기 1
 * Silver 5
 */
public class Q24313 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] str = scanner.nextLine().split(" ");

        // f(n) = a1 * n + a0
        // g(n) = n
        int a1 = Integer.parseInt(str[0]);
        int a0 = Integer.parseInt(str[1]);
        int c = Integer.parseInt(scanner.nextLine());
        int n = Integer.parseInt(scanner.nextLine());

        int result = a1 * n + a0 <= c * n ? 1 : 0;

        // True일 때만 조사
        if (result == 1) {
            for (int i = n; i <= 100; i += 1) {
                int fn = a1 * i + a0;
                int cgn = c * i;

                if (fn > cgn) {
                    result = 0;
                    break;
                }
            }
        }

        System.out.println(result);
    }
}
