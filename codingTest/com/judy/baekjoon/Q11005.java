package com.judy.baekjoon;

import java.util.*;

/**
 * Q11005 진법 변환 2
 * Bronze 1
 */
public class Q11005 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int n = scanner.nextInt();
        int b = scanner.nextInt();

        // System.out.println(Integer.toString(n, b).toUpperCase());

        List<String> result = new ArrayList<>();

        // 수가 진법보다 작아질 떄가지 실행
        while (n > 0) {
            int r = n % b;  // 나머지
            n /= b;  // 몫

            if (r < 10) {
                result.add(String.valueOf(r));
            } else {
                // 10 -> A
                char ch = (char) ('A' + (r - 10));
                result.add(String.valueOf(ch));
            }
        }

        // 거꾸로
        for (int i = result.size() - 1; i >= 0; i -= 1) {
            System.out.print(result.get(i));
        }
    }
}
