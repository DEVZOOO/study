package com.judy.baekjoon;

import java.util.*;

/**
 * Q2501 약수 구하기
 * Bronze 3
 */
public class Q2501 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String str = scanner.nextLine();

        int n = Integer.parseInt(str.split(" ")[0]),
            k = Integer.parseInt(str.split(" ")[1]);

        int result = 0, cnt = 0;

        for (int i = 1; i <= n; i += 1) {
            // 약수
            if (n % i == 0) {
                cnt += 1;

                if (cnt == k) {
                    result = i;
                    break;
                }
            }
        }

        System.out.println(result);
    }
}
