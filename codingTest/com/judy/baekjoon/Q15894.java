package com.judy.baekjoon;

import java.math.BigInteger;
import java.util.*;

/**
 * Q15894 수학은 체육과목 입니다
 * Bronze 3
 */
public class Q15894 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        BigInteger n = BigInteger.valueOf(Integer.parseInt(scanner.nextLine()));

        System.out.println(n.multiply(BigInteger.valueOf(4)));
    }
}
