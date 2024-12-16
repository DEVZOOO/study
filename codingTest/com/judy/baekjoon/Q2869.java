package com.judy.baekjoon;

import java.util.*;

/**
 * Q2869 달팽이는 올라가고 싶다
 * Bronze 1
 */
public class Q2869 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String input = scanner.nextLine();
        int a = Integer.parseInt(input.split(" ")[0]);
        int b = Integer.parseInt(input.split(" ")[1]);
        int v = Integer.parseInt(input.split(" ")[2]);

        int day = (v - a) / (a - b) + 1;
        int r = (v - a) % (a - b);

        if (r > 0 && r <= a) {
            day += 1;
        } else if (r > a) {
            day += 2;
        }

        System.out.println(day);
    }
}
