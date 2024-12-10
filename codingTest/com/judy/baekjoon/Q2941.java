package com.judy.baekjoon;

import java.util.Scanner;

/**
 * Q2941 크로아티아 알파벳
 * Silver 5
 */
public class Q2941 {

    public static void main(String[] args) {

        String[] hrvatski = {"c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="};

        Scanner scanner = new Scanner(System.in);

        String word;

        while (true) {
            System.out.print("단어 입력 > ");
            word = scanner.nextLine();

            if (word.contains(" ")) {
                System.out.println("공백 불가");
                continue;
            }

            if (word.length() > 100) {
                System.out.println("단어는 100자 이하");
                continue;
            }

            break;
        }

        /*
        // 크로아티아 알파벳 있으면 길이 증가하고 해당 문자 공백처리 - 앞뒤문자가 이어져서 크로아티아로 인식되는 경우 배제
        for (int i = 0; i < hrvatski.length; i += 1) {
            String ch = hrvatski[i];

            if (word.contains(ch)) {
                // 크로아티아 알파벳을 한 문자로 변경
                word = word.replaceFirst(ch, ".");
                // 다시 처음부터 비교
                i = -1;
            }
        }

        System.out.println(word.length());
         */

        // =============================
        // 정규식으로
        word = word.replaceAll(String.join("|", hrvatski), ".");
        System.out.println(word.length());

    }
}
