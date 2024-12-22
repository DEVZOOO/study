package com.judy.baekjoon;

import java.util.*;

/**
 * Q9063 대지
 * Bronze 3
 */
public class Q9063 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int n = Integer.parseInt(scanner.nextLine());

        int minX = Integer.MAX_VALUE, maxX = Integer.MIN_VALUE, minY = Integer.MAX_VALUE, maxY = Integer.MIN_VALUE;

        for (int i = 0; i < n; i += 1) {
            String str = scanner.nextLine();
            int x = Integer.parseInt(str.split(" ")[0]);
            int y = Integer.parseInt(str.split(" ")[1]);

            minX = Math.min(x, minX);
            maxX = Math.max(x, maxX);

            minY = Math.min(y, minY);
            maxY = Math.max(y, maxY);
        }

        // 구슬이 2개 미만이면 영역 없음
        if (n < 2) {
            System.out.println(0);
        } else {
            int diffX = Math.abs(maxX - minX);
            int diffY = Math.abs(maxY - minY);
            System.out.println(diffX * diffY);
        }
    }
}
