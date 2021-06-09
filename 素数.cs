using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace myprim
{
    class Prim
    {
        static void Main(string[] args)
        {
            int count;
            int prim=2;
            Boolean cix=false;
            Console.WriteLine("prim={0}", prim);//2为最小质数，所以先打印出来          
            for (prim=3; prim <=100; prim++)//质数
            {
                for (count=2; count < prim; count++)//用于统计循环次数，除数
                {

                    if (prim % count == 0)
                    {
                        cix = true;
                        break;
                    }
                    else
                    { cix = false;
                        
                    }                                        
                }
                if (cix==false )
                    Console.WriteLine("prim={0}", prim);
            }
            Console.Read();     
        }
    }
}