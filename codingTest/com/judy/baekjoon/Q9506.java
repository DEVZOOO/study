package com.judy.baekjoon;

import java.util.*;
import java.util.stream.Collectors;

/**
 * Q9506 약수들의 합
 * Bronze 1
 */
public class Q9506 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String[]> result = new ArrayList<>();

        while (true) {
            int n = Integer.parseInt(scanner.nextLine());

            if (n == -1) {
                break;
            }

            // 1
            /*
            String[] arr = {String.valueOf(n), null};
            Set<Integer> factor = new HashSet<>();
            factor.add(1);

            // 1부터 자기자신 제외
            for (int i = 2; i <= n / 2; i += 1) {
                if (n % i == 0) {
                    factor.add(i);
                    factor.add(n / i);
                }
            }

            int sum = factor.stream().mapToInt(Integer::intValue).sum();

            // 완전수
            if (sum == n) {
                String f = factor.stream().sorted().map(String::valueOf).collect(Collectors.joining(" + "));
                arr[1] = f;
            }
             */

            // 2
            String[] arr;
            List<Integer> factor = new ArrayList<>();
            int sum = 0;
            for (int i = 1; i < n; i += 1) {
                if (n % i == 0) {
                    factor.add(i);
                    sum += i;
                }
            }
            if (sum == n) {
                String f = factor.stream().map(String::valueOf).collect(Collectors.joining(" + "));
                arr = new String[]{String.valueOf(n), f};
            } else {
                arr = new String[]{String.valueOf(n), null};
            }


            result.add(arr);
        }   // END loop

        for (String[] arr : result) {
            if (arr[1] == null) {
                System.out.printf("%s is NOT perfect.\n", arr[0]);
            } else {
                System.out.printf("%s = %s\n", arr[0], arr[1]);
            }
        }

    }
}
