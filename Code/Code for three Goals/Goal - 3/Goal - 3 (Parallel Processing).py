from pyspark.sql import SparkSession
from pyspark import SparkContext
import pyspark.sql.functions as fc
import pandas as pd

sc = SparkContext.getOrCreate()
spark = SparkSession(sc)

Topics = spark.read.csv('Trendingtopics_Combined.csv')
Topics_rdd = Topics.rdd 
#Topic1 = Topics_rdd.mapPartitionsWithIndex(lambda idx, it: islice(it, 1, None) if idx == 0 else it )


name = Topics_rdd.map(lambda x: x['_c0']).collect()
Items = sc.parallelize(name,4).countByValue().items()
listofTuples = sorted(Items , reverse=True, key=lambda x: x[1])
df = pd.DataFrame(listofTuples)
df1 = df.head()
df1[0].to_csv("TopTopics.csv")





