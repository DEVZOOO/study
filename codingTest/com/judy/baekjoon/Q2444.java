package com.judy.baekjoon;

import java.util.Scanner;

/**
 * Q2444 별 찍기 - 7
 * Bronze 3
 */
public class Q2444 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n;

        while (true) {
            System.out.print("줄 수 입력(1 <= N <= 100) > ");
            try {
                n = scanner.nextInt();
            } catch (NumberFormatException e) {
                System.out.println("숫자를 입력하세요");
                continue;
            }

            if (n >= 1 && n <= 100) {
                break;
            }

            System.out.println("1에서 100 사이의 수를 입력하세요.");
        }

        // 한 줄에 문자수
        int cnt = 2 * n - 1;

        for (int i = 1; i <= cnt; i += 1) {
            // 별 개수
            // 기준 수보다 크면 2 * (n - (i - n)) = 2 * (2 * n - i)
            int star = i < n ? 2 * i - 1 : 2 * (2 * n - i) - 1;
            // 양쪽 공백 수
            int blank = (cnt - star) / 2;

            for (int j = 0; j < cnt - blank; j += 1) {
                char ch = j < blank || cnt - j <= blank ? ' ' : '*';

                System.out.print(ch);
            }

            System.out.println();
        }

    }
}
