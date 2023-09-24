"""empty message

Revision ID: e497007a80fb
Revises: e5f1b08a2270
Create Date: 2023-09-24 06:23:08.477073

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e497007a80fb'
down_revision = 'e5f1b08a2270'
branch_labels = None
depends_on = None


def upgrade(engine_name):
    globals()["upgrade_%s" % engine_name]()


def downgrade(engine_name):
    globals()["downgrade_%s" % engine_name]()





def upgrade_():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('Quiz_QA',
    sa.Column('qaid', sa.String(length=32), nullable=False),
    sa.Column('question', sa.String(length=400), nullable=True),
    sa.Column('answer', sa.String(length=1000), nullable=True),
    sa.PrimaryKeyConstraint('qaid'),
    sa.UniqueConstraint('qaid')
    )
    # ### end Alembic commands ###


def downgrade_():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Quiz_QA')
    # ### end Alembic commands ###


def upgrade_prefixed():
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###


def downgrade_prefixed():
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # ### end Alembic commands ###

