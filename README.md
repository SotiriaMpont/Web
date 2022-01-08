# Web
MongoDB
To export all collections:
mongodump -d database_name -o directory_to_store_dumps

To restore them:
mongorestore -d database_name directory_backup_where_mongodb_tobe_restored