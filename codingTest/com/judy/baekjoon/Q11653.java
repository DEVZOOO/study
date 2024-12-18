package com.judy.baekjoon;

import java.util.*;

/**
 * Q11653 소인수분해
 * Bronze 1
 */
public class Q11653 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int i = 1;
        while (n > i) {
            i += 1;

            if (n % i == 0) {
                System.out.println(i);
                n /= i;
                i = 1;
            }
        }
    }
}
