package maxnumberinarray;
import java.util.Random;
import java.util.Scanner;
import static jdk.nashorn.internal.objects.NativeMath.max;

public class MaxNumberInArray {
    
        public static void process(){
        int [] points = {125 , 132 , 95 , 116 ,110};
        int hiScore = max(points);
        System.out.println("the high score is "+hiScore);
    }
    public static int max(int [] numbers){
        int maxScore = numbers[0];
        for(int num : numbers){
            if(num > maxScore){
                maxScore = num ;
            }
        }
        return maxScore;
    }

    public static void main(String[] args) {
        process();
    }
    
}
