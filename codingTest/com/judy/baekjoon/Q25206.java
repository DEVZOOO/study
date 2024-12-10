package com.judy.baekjoon;

import java.util.*;

/**
 * Q25206 너의 평점은
 * Silver 5
 */
public class Q25206 {

    public static void main(String[] args) {
        // 등급별 평점
        Map<String, Double> score = new HashMap<>();
        score.put("A+", 4.5);
        score.put("A0", 4.0);
        score.put("B+", 3.5);
        score.put("B0", 3.0);
        score.put("C+", 2.5);
        score.put("C0", 2.0);
        score.put("D+", 1.5);
        score.put("D0", 1.0);
        score.put("F", 0.0);

        int n = 20;

        Scanner scanner = new Scanner(System.in);

        double levelSum = 0;
        double scoreSum = 0;

        for (int i = 0; i < n; i += 1) {
            String str = scanner.nextLine();
            String[] arr = str.split(" ");
            String level = arr[2];

            // P 제외
            if (level.equals("P")) {
                continue;
            }

            double sc = Double.parseDouble(arr[1]); // 학점
            double lvScore = score.get(level);  // 과목평점

            levelSum += sc;
            scoreSum += sc * lvScore;
        }

        System.out.println("avg: " + scoreSum / levelSum);

    }
}
