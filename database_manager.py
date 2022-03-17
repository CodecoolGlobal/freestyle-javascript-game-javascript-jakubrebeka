import database_common


@database_common.connection_handler
def get_users(cursor):
    query = f"""SELECT username, password FROM users;"""
    cursor.execute(query)
    user_data = cursor.fetchall()
    authentication = {}
    for data in user_data:
        rebuild_data = {data["username"]: data["password"] for (k, v) in data.items()}
        authentication.update(rebuild_data)
    return authentication


@database_common.connection_handler
def get_user_type(cursor, city):
    cursor.execute("""
            SELECT type
            FROM users
            WHERE username = %(city)s;
            """, {'city': city})
    account_data = cursor.fetchall()
    type_string = ""
    for account_type in account_data:
        for key, values in account_type.items():
            type_string += values
    return type_string


@database_common.connection_handler
def register_user(cursor, username, password, account):
    cursor.execute(f"""INSERT INTO users (username, password, type)
                    VALUES ('{username}', '{password}', '{account}');""")
    return cursor.statusmessage
