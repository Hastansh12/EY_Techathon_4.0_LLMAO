"""change to null columns

Revision ID: ca56f31bfd4b
Revises: 
Create Date: 2024-01-16 22:58:53.639584

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import sqlite

# revision identifiers, used by Alembic.
revision = 'ca56f31bfd4b'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('_alembic_tmp_module')
    with op.batch_alter_table('module', schema=None) as batch_op:
        batch_op.drop_column('assignment_questions')

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('college_name', sa.String(length=100), nullable=True))
        batch_op.add_column(sa.Column('course_name', sa.String(length=50), nullable=True))
        batch_op.add_column(sa.Column('student_id', sa.LargeBinary(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('student_id')
        batch_op.drop_column('course_name')
        batch_op.drop_column('college_name')

    with op.batch_alter_table('module', schema=None) as batch_op:
        batch_op.add_column(sa.Column('assignment_questions', sqlite.JSON(), nullable=True))

    op.create_table('_alembic_tmp_module',
    sa.Column('module_id', sa.INTEGER(), nullable=False),
    sa.Column('module_name', sa.VARCHAR(length=100), nullable=False),
    sa.Column('topic_id', sa.INTEGER(), nullable=False),
    sa.Column('websearch', sa.VARCHAR(length=5), nullable=False),
    sa.Column('level', sa.VARCHAR(length=8), nullable=False),
    sa.Column('summary', sa.VARCHAR(length=500), nullable=False),
    sa.Column('submodule_content', sqlite.JSON(), nullable=True),
    sa.Column('image_urls', sqlite.JSON(), nullable=True),
    sa.ForeignKeyConstraint(['topic_id'], ['topic.topic_id'], ),
    sa.PrimaryKeyConstraint('module_id')
    )
    # ### end Alembic commands ###