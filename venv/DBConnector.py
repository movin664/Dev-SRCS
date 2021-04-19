import mysql.connector
from PIL import Image
import io

def readBlobImg(id):
    print("Reading BLOB data from originals table")

    try:
        connection = mysql.connector.connect(host='localhost',
                                             database='dev_e_com_srvs',
                                             user='root',
                                             password='')

        cursor = connection.cursor()
        sql_fetch_blob_query = """SELECT img from originals where CustId = %s"""

        cursor.execute(sql_fetch_blob_query, (id,))
        record = cursor.fetchall()
        file_like2 = io.BytesIO(record[0][0])
        img1 = Image.open(file_like2)
        img1.show()

    except mysql.connector.Error as error:
        print("Failed to read BLOB data from MySQL table {}".format(error))

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

readBlobImg(101)