package com.judy.baekjoon;

import java.util.*;

/**
 * Q3009 네 번째 점
 * Bronze 3
 */
public class Q3009 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[][] coor = new int[3][2];

        for (int i = 0; i < coor.length; i += 1) {
            String str = scanner.nextLine();
            coor[i][0] = Integer.parseInt(str.split(" ")[0]);
            coor[i][1] = Integer.parseInt(str.split(" ")[1]);
        }

        Map<Integer, Integer> xSeq = new HashMap<>();
        Map<Integer, Integer> ySeq = new HashMap<>();

        for (int[] arr : coor) {
            int xCnt = xSeq.getOrDefault(arr[0], 0);
            int yCnt = ySeq.getOrDefault(arr[1], 0);
            xSeq.put(arr[0], xCnt + 1);
            ySeq.put(arr[1], yCnt + 1);
        }

        int x = getCoor(xSeq), y = getCoor(ySeq);

        System.out.printf("%d %d", x, y);
    }

    /**
     * 좌표 찾기
     * @param map
     */
    public static int getCoor(Map<Integer, Integer> map) {
        int coor = 0;

        for (int k : map.keySet()) {
            int cnt = map.get(k);
            if (cnt == 1) {
                coor = k;
                break;
            }
        }
        
        return coor;
    }

}
