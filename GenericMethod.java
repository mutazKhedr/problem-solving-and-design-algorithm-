/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package genericmethod;

/**
 *
 * @author Mass
 */import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;
import static jdk.nashorn.internal.objects.NativeMath.max;


public class GenericMethod {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
                Integer [] intArray ={ 1 ,2 ,3 ,4 ,5 };
        Double[]   doubleArray = {1.1 , 2.1  , 3.2 , 4.5 };
        Character [] charArray = { 'H' , 'B' , 'C' , 'D' , 'E' };
        System.out.println("\n integer ");
        Display(intArray);
        System.out.println("\n double ");
        Display(doubleArray);
        System.out.println("\n char ");
        Display(charArray);

    }
    public static  <T> void Display(T[] array)    {
    for( T element : array){
    System.out.println(element);
}
    }
}

    

