package com.judy.baekjoon;

import java.util.*;

/**
 * Q2745 진법 변환
 * Bronze 2
 */
public class Q2745 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String n = scanner.next();
        int b = scanner.nextInt();

        int len = n.length();
        int result = 0;

        for (int i = 0; i < len; i += 1) {
            char ch = n.charAt(i);
            int num;
            if (b > 10 && ch >= 'A' && ch <= 'Z') {
                // 문자
                num = ch - 'A' + 10;
            } else {
                // 숫자
                num = Integer.parseInt(String.valueOf(ch));
            }

            // 거듭제곱 * 자릿수
            result += Math.pow(b, len - 1 - i) * num;
        }

        System.out.println(result);
    }
}
