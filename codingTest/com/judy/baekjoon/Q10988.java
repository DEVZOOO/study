package com.judy.baekjoon;

import java.util.Scanner;

/**
 * Q10988 팰린드롬인지 확인하기
 * Bronze 3
 */
public class Q10988 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String word;

        while (true) {
            System.out.print("단어 입력 > ");
            word = scanner.nextLine();

            if (word.length() >= 1 && word.length() <= 100) {
                break;
            }

            System.out.println("단어 길이는 1~100 이어야 합니다.");
        }

        StringBuilder reversedWord = new StringBuilder();
        // 문자를 거꾸로 붙여 reversed word 생성
        for (int i = 0; i < word.length(); i += 1) {
            reversedWord.insert(0, word.charAt(i));
        }

        System.out.println(word.contentEquals(reversedWord) ? "1" : "0");

    }
}
