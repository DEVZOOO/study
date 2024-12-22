package com.judy.baekjoon;

import java.util.*;

/**
 * Q10101 삼각형 외우기
 * Bronze 4
 */
public class Q10101 {

     public enum STATUS {
         EQUAL("Equilateral"),
         ISO("Isosceles"),
         SCALENE("Scalene"),
         ERROR("Error")
         ;

        private final String text;
        STATUS(String text) {
            this.text = text;
        }

        public String getText() {
            return this.text;
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
        int c = Integer.parseInt(scanner.nextLine());

        if (a + b + c != 180) {
            System.out.println(STATUS.ERROR.getText());
            return;
        }
        if (a == b && b == c && a == 60) {
            System.out.println(STATUS.EQUAL.getText());
        } else if (a == b || b == c || a == c) {
            System.out.println(STATUS.ISO.getText());
        } else if (a != b && b != c && a != c) {
            System.out.println(STATUS.SCALENE.getText());
        }
    }
}
