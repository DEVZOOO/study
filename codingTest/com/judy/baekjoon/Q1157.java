package com.judy.baekjoon;

import java.util.HashMap;
import java.util.Scanner;
import java.util.Map;

/**
 * Q1157 단어 공부
 * Bronze 1
 */
public class Q1157 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String word;

        while (true) {
            System.out.print("단어 > ");
            word = scanner.nextLine();

            if (word.contains(" ")) {
                System.out.println("단어에는 공백이 포함되면 안됩니다.");
                continue;
            }

            if (word.length() <= 1000000) {
                break;
            }

            System.out.println("단어 길이는 1,000,000 이하여야 합니다.");
        }

        // 빈도수 저장 맵
        Map<String, Integer> freq = new HashMap<>();

        for (int i = 0; i < word.length(); i += 1) {
            String str = String.valueOf(word.charAt(i)).toLowerCase();
            int cnt = freq.getOrDefault(str, 0) + 1;
            // 빈도수 업데이트
            freq.put(str, cnt);
        }

        String w = "";
        boolean isDu = false;

        for (String k : freq.keySet()) {
            int max = freq.getOrDefault(w, 0);
            if (max < freq.get(k)) {
                w = k;
                // 최댓값 바뀌었으므로 중복 플래그 초기화
                isDu = false;
            } else if (max == freq.get(k)) {
                // 최댓값과 현재 값이 동일하면 중복 플래그
                isDu = true;
            }
        }

        System.out.println(isDu ? "?" : w.toUpperCase());
    }
}
