package com.judy.baekjoon;

import java.util.*;

/**
 * Q5073 삼각형과 세 변
 * Bronze 3
 */
public class Q5073 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        StringBuffer sb = new StringBuffer();

        while (true) {
            int max;

            String[] arr = scanner.nextLine().split(" ");
            int a = Integer.parseInt(arr[0]);
            max = a;
            int b = Integer.parseInt(arr[1]);
            if (max < b) {
                max = b;
            }
            int c = Integer.parseInt(arr[2]);
            if (max < c) {
                max = c;
            }

            if (a == 0 && b == 0 && c == 0) {
                break;
            }

            int sum = a + b + c - max;
            if (sum <= max) {
                sb.append("Invalid\n");
                continue;
            }

            if (a == b && b == c) {
                sb.append("Equilateral\n");
            } else if (a == b || b == c || c == a) {
                sb.append("Isosceles\n");
            } else if (a != b && b != c && c != a) {
                sb.append("Scalene\n");
            }
        }

        System.out.println(sb);
    }
}
