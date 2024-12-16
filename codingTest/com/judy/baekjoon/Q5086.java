package com.judy.baekjoon;

import java.util.*;

/**
 * Q5086 배수와 약수
 * Bronze 3
 */
public class Q5086 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> rel = new ArrayList<>();

        while (true) {
            String str = scanner.nextLine();
            int n1 = Integer.parseInt(str.split(" ")[0]);
            int n2 = Integer.parseInt(str.split(" ")[1]);

            if (n1 == 0 && n2 == 0) {
                break;
            }

            // 초기값 아무것도 아님
            String result = "neither";
            if (n2 % n1 == 0) {
                // 약수
                result = "factor";
            } else if (n1 % n2 == 0) {
                // 배수
                result = "multiple";
            }

            rel.add(result);
        }   // END loop

        for (String r : rel) {
            System.out.println(r);
        }
    }

}
