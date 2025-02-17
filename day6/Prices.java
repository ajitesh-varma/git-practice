public class Prices{
    public static void main(String a[]){
    int m[] = {8,4,6,2,3};
    for (int i=0; i<5; i++){
        for (int j=i+1; j<5; j++){
            if(m[i]>m[j]){
                m[i] -= m[j];
                break;
            }
        }
    }   
    for(int i=0; i<5;i++){
        System.out.print(m[i]+" ");
    } 

    }
}