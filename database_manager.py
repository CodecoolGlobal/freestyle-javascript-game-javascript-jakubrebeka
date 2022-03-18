from psycopg2 import sql

import database_common


@database_common.connection_handler
def show_scores(cursor):
    query = f"""SELECT * FROM players;"""
    cursor.execute(query)
    return cursor.fetchall()


@database_common.connection_handler
def add_scores(cursor, username, score):
    query = sql.SQL("INSERT INTO players (username, score) VALUES ({username}, {score})").format(
        username=sql.Literal(username), score=sql.Literal(score))
    cursor.execute(query)
    return cursor.statusmessage





