
import java.util.ArrayList;

public class CombinationFind {

    public static void main(String[] args) {
        int[] arr = {2, 3, 11, 30, 3, 1, 4, 14, 27, 17, 5};
        ArrayList<int[]> combinations = findCombinations(arr);
        for (int[] comb : combinations) {
            System.out.println(comb[0] + " + " + comb[1] + " = " + comb[2]);
        }
    }
 
    public static ArrayList<int[]> findCombinations(int[] arr) {
        ArrayList<int[]> combinations = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                for (int k = 0; k < arr.length; k++) {
                    if (i != j && i != k && j != k && arr[i] + arr[j] == arr[k]) {
                        combinations.add(new int[]{arr[i], arr[j], arr[k]});
                    }
                }
            }
        }
        return combinations;
    }
}