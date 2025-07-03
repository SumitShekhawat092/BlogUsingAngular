using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Reverse
    {
        public string Reverse(string input) 
        {
            string[] words = input.Split(' ');
            //string[] revSequence = input.Split(' ');
            StringBuilder stringBuilder = new StringBuilder();
            for (int i = 0; i < words.Count() /*4*/; i++)
            {
               
                stringBuilder.Append(words[i].Reverse() + " ");
            }
            return stringBuilder.ToString();
        }
    }
}
