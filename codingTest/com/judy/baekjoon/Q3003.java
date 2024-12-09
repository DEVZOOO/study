package com.judy.baekjoon;

import java.util.Scanner;

/**
 * Q3003 킹, 퀸, 룩, 비숍, 나이트, 폰
 * Bronze 5
 */
public class Q3003 {

    public static void main(String[] args) {
        System.out.println("-------- Q3003 --------");

        int[] pieces = {1, 1, 2, 2, 2, 8};

        int[] required = new int[pieces.length];

        Scanner scan = new Scanner(System.in);
        String[] strArr;

        while (true) {
            System.out.print("찾은 체스 입력 > ");

            String str = scan.nextLine();
            strArr = str.split(" ");

            if (strArr.length == pieces.length) {
                break;
            }

            System.out.println("체스말 개수는 " + pieces.length + "입니다.");
        }

        for (int i = 0; i < pieces.length; i += 1) {
            required[i] = pieces[i] - Integer.parseInt(strArr[i]);
        }

        for (int i : required) {
            System.out.print(i + " ");
        }

    }
}
