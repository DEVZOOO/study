package com.judy.baekjoon;

import java.util.*;

/**
 * Q1978 소수 찾기
 * Bronze 2
 */
public class Q1978 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int cnt = 0;

        while (n > 0) {
            n -= 1;

            int num = scanner.nextInt();

            if (num == 1) {
                continue;
            }

            boolean flag = true;
            // 소수 = 1과 자기 자신을 제외한 약수가 없음
            for (int i = 2; i < num; i += 1) {
                if (num % i == 0) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                cnt += 1;
            }

        }

        System.out.println(cnt);
    }
}
