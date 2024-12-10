package com.judy.baekjoon;

import java.util.*;

/**
 * Q10798 세로읽기
 * Bronze 1
 */
public class Q10798 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> result = new ArrayList<>();

        for (int i = 0; i < 5; i += 1) {
            String str = scanner.nextLine();

            for (int j = 0; j < str.length(); j += 1) {
                String ch = String.valueOf(str.charAt(j));

                if (result.size() - 1 < j) {
                    result.add(ch);
                } else {
                    String s = result.get(j);
                    result.set(j, s + ch);
                }
            }
        }

        for (String s : result) {
            System.out.print(s);
        }
    }
}
