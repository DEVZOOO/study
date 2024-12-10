package com.judy.baekjoon;

import java.util.*;

/**
 * Q1316 그룹 단어 체커
 * Silver 5
 */
public class Q1316 {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<String> words = new ArrayList<>();
        int cnt;

        while (true) {
            System.out.print("단어 개수 입력(1~100) > ");

            try {
                cnt = Integer.parseInt(scanner.nextLine());
            } catch (NumberFormatException e) {
                System.out.println("숫자만 입력하세요.");
                continue;
            }

            if (cnt > 100) {
                System.out.println("단어는 1~100개 입니다.");
                continue;
            }

            for (int i = 0; i < cnt; i += 1) {
                System.out.print("단어 입력 > ");
                String w = scanner.nextLine();
                words.add(w);
            }

            break;
        }

        int notGroupCnt = 0;

        for (String w : words) {
            Map<String, Integer> charMap = new HashMap<>();

            String prevStr = "";
            for (int i = 0; i < w.length(); i += 1) {
                String ch = String.valueOf(w.charAt(i)).toLowerCase();

                // 이전 문자와 다르면 처음 나오는 문자여야 함
                if (!prevStr.equals("") && !ch.equals(prevStr) && charMap.containsKey(ch)) {
                    notGroupCnt += 1;
                    break;
                }

                int n = charMap.getOrDefault(ch, 0);
                charMap.put(ch, n + 1);

                prevStr = ch;
            }
        }

        System.out.println(cnt - notGroupCnt);

    }
}
