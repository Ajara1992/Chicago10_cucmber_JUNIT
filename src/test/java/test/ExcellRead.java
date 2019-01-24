package test;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import utilities.Config;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

public class ExcellRead {
    public static void main(String[] args) throws Exception {

        //opening , reading file
        File file = new File("src/SimpleData.xlsx");

        System.out.println(file.exists());

        FileInputStream inputStream = new FileInputStream(file);
        //loading into class
        XSSFWorkbook workbook = new XSSFWorkbook(inputStream);

        XSSFSheet worksheet = workbook.getSheet("test");
        System.out.println(worksheet.getRow(1).getCell(1));
        System.out.println(worksheet.getRow(5).getCell(0));

        //to get the physical number of rows used

        int usedRows = worksheet.getPhysicalNumberOfRows();
        System.out.println("PhysicalNumberOfRows:" + usedRows);


        int lastUsedRow = worksheet.getLastRowNum();
        System.out.println("LastRowNum: " + lastUsedRow);

        //TODO: print out Nancy's job_id dynamically

        for (int rowNum=0; rowNum<=usedRows; rowNum++) {
            if(worksheet.getRow(rowNum).getCell(0).toString().equals("Nancy")){
                System.out.println("Nancy's job is: " + worksheet.getRow(rowNum).getCell(2));
                break;
            }

        }

        //TODO:  if last name is mathcing , printout all the information for that person:
        //firdstname, lastname, job_id
        //get the last name from config
        String lastname = Config.getProperty("lastname");

        for(int i=0; i<usedRows; i++){
            if(worksheet.getRow(i).getCell(1).toString().equals(lastname)){
                System.out.println("Haan's information : " +  lastname  +
                        worksheet.getRow(i).getCell(0)+ "," +
                        worksheet.getRow(i).getCell(2));

            }
        }









        workbook.close();
        inputStream.close();

        }

    }

