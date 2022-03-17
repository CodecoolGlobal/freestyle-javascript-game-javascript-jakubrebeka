import database_common


@database_common.connection_handler
def show_scores(cursor):
    query = f"""SELECT * FROM players;"""
    cursor.execute(query)
    return cursor.fetchall()


@database_common.connection_handler
def add_scores(cursor, username, score):
    cursor.execute(f"""INSERT INTO players (username, score)
                    VALUES ('{username}', '{score}');""")
    return cursor.statusmessage





