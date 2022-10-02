# Lotus SmartSuite and the year 2000

<!--more-->

![Lotus SmartSuite and the year 2000](https://i.snap.as/qBzkbjEA.png)_I stumbled across this wonderful help document in [Lotus SmartSuite 9.8](https://winworldpc.com/product/lotus-smartsuite/9-8) and my head just shot right off._

All of the programs in this release of Lotus SmartSuite meet Lotus guidelines for Year 2000 (Y2K) readiness. When used in accordance with its associated documentation, each of the SmartSuite programs is capable of correctly processing, providing and/or receiving date data within and between the 20th and 21st centuries, provided that all products (for example, hardware, software and firmware) used with the program properly exchange accurate date data with it.

**A little background information**  
In the past, you have probably entered a 2-digit number to represent the year in a date with the assumption that the year would fall between 1900 and 1999. For example, 4/10/02 was in 1902 and 5/8/47 was in 1947.

With the change to the year 2000, you should be aware that computer programs may now interpret dates you enter with 2-digit years to be in the 20th or the 21st century depending on the method the program uses to define a 2-digit year.

SmartSuite programs use a sliding (rolling) window method to determine the year when you enter only 2 digits to represent the year in a date.

**Notes**

- You can enter the year as 4 digits to make sure you get the results you want. For example, enter 1916 or 2016 instead of 16 for the year.
- Although you can change how a program displays a date by selecting different date formats, the program stores a constant value for the date no matter how you choose to display it.

**What is the sliding window method?**  
In SmartSuite, the sliding window method defines a window of 100 years around the current year (determined by the system date on your computer). When you enter a 2-digit year, the program compares the 2 digits you entered with the years that fall within this 100 year window.  
For example, entering 25 for the year might be interpreted as 1925 but 04 might mean the year 2004.

The years that mark the beginning and end of this window are defined by where the program splits the window with the current year.  
By default, 1-2-3, Approach, Freelance Graphics, Organizer, and Word Pro use an 80/20 rule for this sliding window -- the window begins 80 years before and ends 19 years after the current year.

**How does the 80/20 rule work?**  
Suppose the current year is 1999. Using the 80/20 rule, a window spanning 100 years includes the years 1919 to 2018.

In 1999, any 2-digit year you enter from 19 to 99 will equal years from 1919 to 1999. Any 2-digit year you enter from 00 to 18 will equal years from 2000 to 2018. If you want to enter a date before 1919 or after 2018, you must enter 4 digits for the year.  
For example, assume that the current year is 1999. 
• If you enter 4/2/19, the year will be 1919. 
• If you enter 4/2/72, the year will be 1972. 
• If you enter 4/2/00, the year will be 2000. 
• If you enter 4/2/17, the year will be 2017. 
• If you enter 4/2/1917, the year will be 1917. 
Every year this 100 year window moves (slides) forward one year. Under the 80/20 rule, when the year changes to 2000, the window will include the years 1920 to 2019. When the year changes to 2001, the window will include the years 1921 to 2020, and so on.

**How do you change the 80/20 default?**  
The 80/20 default for SmartSuite is set through a single entry in the Windows registry. You can change this registry entry using the sample scripts available on the Web (www.lotus.com/smartsuitedev) and in the \\Extra directory on the CD version of Lotus SmartSuite.  
**Caution** Changing the default changes it for all of the programs in SmartSuite.

**How do SmartSuite programs store dates?**  
All the SmartSuite programs store date values with the fully qualified year. Therefore, dates already stored in files are not affected by the sliding window. The sliding window is used to interpret a date when you enter it using 2 digits to represent the year.  
**Caution** If years are stored as separate values in a file, and scripts or macros interpret these dates as they run, the sliding window rules will apply to those values when only 2 digits are stored for the year.

**For 1-2-3 users only**  
You can turn off the 80/20 sliding window in 1-2-3 by changing the date settings in the 1-2-3 Preferences dialog box. You can also display all dates with 4-digit years. For more information on 1-2-3 and the year 2000, open Help in 1-2-3 and search on Year 2000 in the Help Index.

**Notice**  
**The information regarding the Year 2000 readiness of Lotus products is provided for informational purposes only and is not a warranty or an extension or modification to the terms of any applicable warranty. The limited warranty for Lotus products is solely as contained in the software agreement governing your use of Lotus software. For the most complete and current information about the Year 2000 readiness of the SmartSuite products and other Lotus products, please see the Lotus Year 2000 web site (http://www.lotus.com/year2000).**