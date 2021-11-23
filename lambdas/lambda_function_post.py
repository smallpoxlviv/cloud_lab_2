import sys
import logging
import rds_config
import pymysql
import json

#rds settings
rds_host  = "lab2database.chov87qbwh0h.eu-central-1.rds.amazonaws.com"
name = rds_config.db_username
password = rds_config.db_password
db_name = rds_config.db_name

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn = pymysql.connect(host=rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
except pymysql.MySQLError as e:
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    sys.exit()

logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")
def lambda_handler(event, context):
    """
    This function fetches content from MySQL RDS instance
    """
    name = str(event['name'])
    settlement = str(event['settlement'])
    latitude = str(event['latitude'])
    longtitude = str(event['longtitude'])
    water_level = str(event['water_level'])
    measurement_date = str(event['measurement_date'])

    data = [{
        'name': name,
        'settlement': settlement,
        'latitude': latitude,
        'longtitude': longtitude,
        'water_level': water_level,
        'measurement_date': measurement_date
    }]

    with conn.cursor() as cur:
        sql = "insert into `river` (`name`, `settlement`, `latitude`, `longitude`,\
         `water_level`, `measurement_date`) VALUES (%s, %s, %s, %s, %s, %s);"
        cur.execute(sql, (name, settlement, latitude, longtitude, water_level, measurement_date))
        logger.info(data)
    conn.commit()
    
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": json.dumps(data)
    }